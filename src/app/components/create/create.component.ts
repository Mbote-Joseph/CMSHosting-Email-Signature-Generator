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
  imageUrl:any='https://img.mysignature.io/p/6/5/9/65978094-291c-58bb-953f-3bac04d6fd46.png?time=1592495530';
  bannerUrl:any='';
  facebookLink: any='';
  instagramLink: any='';
  twitterLink: any='';
  linkedinLink: any='';
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
      document.getElementById('imageUrl').innerHTML = this.imageUrl.value;
      document.getElementById('bannerUrl').innerHTML = this.bannerUrl.value;
      document.getElementById('facebookLink').innerHTML = this.facebookLink.value;
      document.getElementById('instagramLink').innerHTML = this.instagramLink.value;
      document.getElementById('twitterLink').innerHTML = this.twitterLink.value;
      document.getElementById('linkedinLink').innerHTML = this.linkedinLink.value;
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
