import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  
  name: any='Matthew Murphy';
  company: any ='';
  position: any='';
  department: any='';
  phone:any='';
  mobile: any='';
  website:any='';
  skype: any='';
  email:any='';
  address:any='';
  value:any='';
  
  constructor() { }

  ngOnInit(): void {
  }
  reviewFunction(){
		if (document.getElementById('review')) { 
      document.getElementById('name').innerHTML = this.name.value;
      document.getElementById('company').innerHTML = this.company.value;
      document.getElementById('position').innerHTML = this.position.value;
      document.getElementById('department').innerHTML = this.department.value;
      document.getElementById('phone').innerHTML = this.phone.value;
      document.getElementById('mobile').innerHTML = this.mobile.value;
      document.getElementById('website').innerHTML = this.website.value;
      document.getElementById('skype').innerHTML = this.skype.value;
      document.getElementById('email').innerHTML = this.email.value;
      document.getElementById('address').innerHTML = this.address.value;
      }
}

getFunction(){
	if (document.getElementById('get')) { 
		let e=document.getElementById("htmlcode");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode(){
  if (document.getElementById('get')) { 
		let e=document.getElementById("htmlcode");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction1(){
	if (document.getElementById('get1')) { 
		let e=document.getElementById("htmlcode1");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode1(){
  if (document.getElementById('get1')) { 
		let e=document.getElementById("htmlcode1");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction2(){
	if (document.getElementById('get2')) { 
		let e=document.getElementById("htmlcode2");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode2(){
  if (document.getElementById('get2')) { 
		let e=document.getElementById("htmlcode2");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}
getFunction3(){
	if (document.getElementById('get3')) { 
		let e=document.getElementById("htmlcode3");
      let content=e.innerHTML;
      alert(content);
       this.value=content
 		}
 	
    }
copyCode3(){
  if (document.getElementById('get3')) { 
		let e=document.getElementById("htmlcode3");
      let content=e.innerHTML;
      
       this.value=content
 		}
 
}

}
