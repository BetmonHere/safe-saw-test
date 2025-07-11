// preload.js
(function preloadUsers() {
  if (localStorage.getItem("preloaded") === "true") return;

  const accounts = [
    {
      username: "dhamu",
      email: "dhamu@gmail.com",
      password: "dhamu123",
      first_name: "Dhashamoolam",
      last_name: "Dhamu",
      dob: "1995-01-01",
      address: "Chennai",
      aadhar: "1111-2222-3333",
      phone: "9876543210",
      account_type: "savings",
      deposit: "10000",
      createdAt: new Date().toISOString()
    },
    {
      username: "batmon",
      email: "batmon@gmail.com",
      password: "batmon123",
      first_name: "Bat",
      last_name: "Mon",
      dob: "1993-05-12",
      address: "Gotham",
      aadhar: "4444-5555-6666",
      phone: "9876501234",
      account_type: "zero_balance",
      deposit: "5000",
      createdAt: new Date().toISOString()
    },
    {
      username: "abhishek",
      email: "abhishek@gmail.com",
      password: "abhishek123",
      first_name: "Abhishek",
      last_name: "G",
      dob: "2000-08-22",
      address: "Bangalore",
      aadhar: "7777-8888-9999",
      phone: "9845001122",
      account_type: "business",
      deposit: "20000",
      createdAt: new Date().toISOString()
    }
  ];

  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("preloaded", "true");
})();
