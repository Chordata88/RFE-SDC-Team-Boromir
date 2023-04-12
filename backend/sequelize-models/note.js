function addMany(modelKey) {
  return {
    to: function(modelHolder) {
      modelKey.hasMany(modelHolder);
      modelHolder.belongsTo(modelKey, { foreignKeyConstraint: true });
    }
  }
}

function addOne(modelKey) {
  return {
    to: function(modelHolder) {
      modelKey.hasOne(modelHolder);
      modelHolder.belongsTo(modelKey, { foreignKeyConstraint: true });
    }
  }
}

addMany(User).to(Address);// this gives a UserId to Address
addMany(User).to(BillingAccount); // this gives a UserId to BillingAccount
addMany(User).to(Order); // this gives a UserId to Address
addOne(User).to(Session); // this gives a UserId to Order
addMany(BillingAccount).to(Order); // this gives a BillingId to Order
addMany(Address).to(Order); // this gives a AddressId to Order
addMany(Order).to(OrderItem); // this gives a OrderId to OrderItem
addMany(Item).to(OrderItem); // this gives an ItemId to OrderItem
addOne(Address).to(User); // this gives an AddressId to User
addOne(BillingAccount).to(User); // this gives BillingAccountId to User