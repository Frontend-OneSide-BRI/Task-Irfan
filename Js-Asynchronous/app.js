const users = [
  { id: 1, username: "lala", address: "Jakarta" },
  { id: 2, username: "lili", address: "Surabaya" },
];

const transactions = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Sedang dikirim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Dibatalkan" },
    ],
  },
];

const detailTransaction = [
  { id: 1, production: "Kopi hitam", qty: 3, totalAmount: 3000 },
  { id: 2, production: "Gula aren", qty: 1, totalAmount: 5000 },
];

function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.filter((e) => e.username === username);
      if (user) {
        resolve(user[0]);
      } else {
        reject("Failed fetch user data");
      }
    }, 500);
  });
}

function getTransaction(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transaction = transactions.filter((e) => e.user_id === userId);
      if (transaction) {
        resolve(transaction);
      } else {
        reject("Failed fetch transaction data");
      }
    }, 500);
  });
}

function getDetailTransaction(transactionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataTransaction = detailTransaction.filter(
        (e) => e.id === transactionId
      );
      if (dataTransaction) {
        resolve(dataTransaction);
      } else {
        reject("Failed fetch detail transaction data");
      }
    }, 500);
  });
}

//Promise then
login("lala")
  .then((dataUser) => {
    console.log("User (Promise then)==>>", dataUser);
    return getTransaction(dataUser.id);
  })
  .then((dataTransaction) => {
    console.log("Transaction (Promise then)==>>", dataTransaction[0]);
    return getDetailTransaction(dataTransaction[0].user_id);
  })
  .then((dataDetailTransaction) => {
    console.log(
      "Detail Transaction (Promise then)==>>",
      dataDetailTransaction[0]
    );
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//Async Await
async function asyncAwait() {
  try {
    const dataUser = await login("lala");
    console.log("User (Async Await) ==>>", dataUser);

    const dataTransaction = await getTransaction(dataUser.id);
    console.log("Transaction (Async Await) ==>>", dataTransaction[0]);

    const dataDetailTransaction = await getDetailTransaction(
      dataTransaction[0].user_id
    );
    console.log(
      "Detail Transaction (Async Await) ==>>",
      dataDetailTransaction[0]
    );
  } catch (error) {
    console.log("Error:", error);
  }
}

asyncAwait();
