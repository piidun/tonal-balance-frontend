<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" id="payment-form">
      <label for="credits" class="text-slate-600">Number of credits to purchase:</label>
      <input type="number" class="bg-slate-600 text-green-400 rounded-sm w-full mb-2 p-2" v-model.number="credits" id="credits" min="1" required />

      <div id="card-element"><!--Stripe.js injects the Card Element--></div>
      
      <p class="text-slate-800 m-2">Total Amount: ${{ totalAmount }}</p>

      <button :disabled="loading || credits < 1" id="submit">Pay</button>
      <div id="error-message">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import { getUsernameFromToken } from '@/services/authService';

export default {
  data() {
    return {
      stripe: null,
      elements: null,
      card: null,
      credits: 1,
      loading: false,
      errorMessage: ''
    };
  },
  computed: {
    totalAmount() {
      return this.credits;
    }
  },
  async mounted() {
    this.stripe = await loadStripe("pk_test_51PSLCF026fa2qmtxoQ3DaXGfl5eYBFa9mfpD29wNs9OoL9MecmZi01mTMEsTHm1vdEi0NdAoYqp7DS8glJ8zT0wO00taarFUIv");
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
  },
  methods: {
    async handleSubmit() {
      this.loading = true;

      const amountInCents = this.totalAmount * 100;

      // Create a payment intent on the server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amountInCents, user_id: getUsernameFromToken(useCookie('token').value) }) // Example data
      });

      const { clientSecret, error } = await response.json();

      if (error) {
        this.errorMessage = error;
        this.loading = false;
        return;
      }

      // Confirm the payment
      const { error: stripeError, paymentIntent } = await this.stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: this.card,
          billing_details: { name: 'Customer Name' }
        }
      });

      if (stripeError) {
        this.errorMessage = stripeError.message;
        this.loading = false;
      } else {
        if (paymentIntent.status === 'succeeded') {
          await fetch('/api/update-credits', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: getUsernameFromToken(useCookie('token').value), credits: this.credits }) // Example data
          });
          alert('Payment successful!');
          this.loading = false;
        }
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

#payment-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

#card-element {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#submit {
  background-color: #6772e5;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

#submit:disabled {
  background-color: #ccc;
}

#error-message {
  color: red;
  margin-top: 10px;
}
</style>
