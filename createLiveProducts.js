const  Stripe  = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  

const importedProducts  
//call stripe api to create products for each product
const createProducts = async () => {
  for(const product of importedProducts) {
    try {
          const response = await stripe.products.create({
          name: product.name,
          description: product.description,
          metadata: product.metadata,
          marketing_features: product.marketing_features,
          tax_code: product.tax_code,
          default_price_data: {
            unit_amount: product.default_price.unit_amount,
            currency: product.default_price.currency,
            tax_behavior: product.default_price.tax_behavior,
          },
        })
        console.log('done',response)
      
    } catch (error) {
      console.log(error)
    }
  }

  console.log('Finished importing')
} 

createProducts()

