// Delete ข้อมูล Document ของ Customer ที่มีชื่อว่า `Jack` ออกทั้งหมด
// จากนั้นให้ตรวจสอบด้วยว่าข้อมูล Document ของ Customer ที่มีชื่อว่า `Jack` ถูกลบออกทั้งหมดจริงๆ
db.pizzaOrders.deleteMany({
  customer_name: "Jack",
});

// ตรวจสอบว่าข้อมูล Document ของ Customer ที่มีชื่อว่า `Jack` ถูกลบไปหรือยัง
db.pizzaOrders.find({ customer_name: "Jack" });

// Answer
// ผลการตรวจสอบ ไม่มีการคืนค่าใด ๆ ออกมา
