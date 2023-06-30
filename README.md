# redux-learning
เดิมที่ component แต่ละตัวมี state ของตัวเอง ถ้า component อื่นๆ อยากได้ ค่าจาก state ตัวอื่นเราต้องส่ง props ไปให้ แต่ไม่ใช่กับ Redux ที่ใช้ state ร่วมกันในชื่อ store ถ้าใครอยากได้ค่าอะไรก็รับจากส่วนกลางไปเลย หรือถ้าต้องการอัพเดทค่าก็ส่งคำขอ( action ) ไปที่ส่วนกลาง แล้วให้ส่วนกลางจัดการให้ทีเดียวเลยนั่นเอง
## การติดตั้ง Library 
- npm install
- redux
- react-redux
- redux-devtools-extension

### การสร้าง Store หรือ Reducer 
### การดึงข้อมูลใน Store มาใช้งานด้วย useSelector
### การเปลี่ยนแปลงค่าใน Store ด้วย useDispatch
