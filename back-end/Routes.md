## Login route (GET)

`localhost:3001/login`
`
body: {
    email, password
}
`
`response:{
token, name, role
}
`

## Register route (POST)

`localhost:3001/register`
`
body: {
    email, password, name
}
`
`response:{
token, name, role
}
`

role pode ser: 'admin', 'seller' ou 'buyer'

## ROTAS COM TOKEN

`o token deve estar nos headers da req. na chave authorization`

## Users

## Get all sellers (GET)

`localhost:3001/users/sellers`

`response:{
 id, name, email, password, role
}[]
`  

## Get one user(GET)

`localhost:3001/users/:id`

`response:{
 id, name, email, password, role
}`

## Products

### Get all (GET)

`localhost:3001/products`

`response: {id, name, price, url_image}[]`

### Get by Id (GET)

`localhost:3001/products/:id`

`response: {id, name, price, url_image}`

## Sales

### Get all (GET)

##### retorna todas as sales relacionadas a pessoa que fez a req.

`localhost:3001/sales`

`response: {id, user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status, products:[{product_id, quantity}]}[]`

### Get by Id (GET)

`localhost:3001/sales/:id`

`response: {id, user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status}`

### Create (POST)

`localhost:3001/sales`

`body: {
    sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, products: [{productId, quantity}]
}`

`response: {id, user_id, seller_id, total_price, delivery_address, delivery_number, sale_date, status, products: [{productId, quantity}]}`

status pode ser: 'pending', 'preparing', 'in_route', 'delivered'

