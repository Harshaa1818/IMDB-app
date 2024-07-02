 
 import './style.css'
 
 const Moneymul=()=>{
    const input = [
        {
          user_id: 123,
          name: "Krishna",
          role: "admin",
          city: "Delhi",
        },
        {
          user_id: 123,
          name: "Krishna",
          role: "guest",
          city: "Delhi",
        },
        {
          user_id: 124,
          name: "Krishna A",
          role: "admin",
          city: "Delhi",
        },
        {
          user_id: 125,
          name: "Krishna B",
          role: "guest",
          city: "Mumbai",
        },
        {
          user_id: 126,
          name: "Krishna C",
          role: "admin",
          city: "Jaipur",
        },
        {
          user_id: 127,
          name: "Krishna  D",
          role: "guest",
          city: "Kolkata",
        },
      ];
    
      let hashSet = new Set();
      let answer = [];
    
      for (let i = 0; i < input.length; i++) {
        if (hashSet.has(input[i].city)) {
    
            
            
                for(let j=0;j<answer.length;j++){
                    if(input[i].city==answer[j].city){
    
                        if(answer[j].hasOwnProperty("guest")){
                            answer[j].guest+=1
                        }
                        else answer[j].guest=1
    
                         if(answer[j].hasOwnProperty("admin")){
                            answer[j].admin+=1
                        }
                        else answer[j].admin=1
                        }
                        
                    }
                
            
                }
    
        
        else {
          hashSet.add(input[i].city);
          let temp = {};
          temp.city = input[i].city;
    
          if (input[i].role == "guest") {
            temp.guest = 1;
          } else if (input[i].role == "admin") {
            temp.admin = 1;
          }
          answer.push(temp);
          
        }
    }
    
      console.log(answer);


return(
    <div>
    <table>
        
        <tr>
            <th className="table-head">City</th>
            <th className="table-head">Admin</th>
            <th className="table-head">Guest</th>
        </tr>
        
        {answer.map((obj)=>(
            <tr>
            <td>{obj.city}</td>
            <td>{obj.admin?obj.admin:0}</td>
            <td>{obj.guest?obj.guest:0}</td>
            
            </tr>  
        )

        )}
        
    </table>
  </div>
)

}
export default Moneymul