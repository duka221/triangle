class option1{
	constructor(a, b, c){
		this.a = Math.abs(a);
		this.b = Math.abs(b);
		this.c = Math.abs(c);

		this.p = this.a + this.b + this.c;
		this.P = this.p/2;
		this.s = Math.sqrt (this.P * (this.P-this.a) * (this.P-this.b) * (this.P - this.c));
		this.r = this.s / this.P;
		this.R = this.a * this.b * this.c / (4 * this.s);

		this.angle1 = this.angle(this.a,this.b,this.c);
		this.angle2 = this.angle(this.c,this.b,this.a);
		this.angle3 = this.angle(this.c,this.a,this.b);
		
		this.h1 = this.h(this.s,this.a);
		this.h2 = this.h(this.s,this.b) ;		
		this.h3 = this.h(this.s,this.c);

		this.m1 = this.m(this.b,this.a,this.c);
		this.m2 = this.m(this.a,this.c,this.b);
		this.m3 = this.m(this.a,this.b,this.c);

		this.l1 = this.l(this.a, this.b, this.c);
		this.l2 = this.l(this.c, this.b, this.a);
		this.l3 = this.l(this.c, this.a, this.b);

		if ((this.a+this.b > this.c && this.a+this.c > this.b && this.b+this.c > this.a)) {
		return console.log("  samkutxedia ");
		}
		else 
		return console.log(" ar aris samkutxedi ");
	}
	angle(a,b,c){
		return Math.acos((a * a+b * b-c * c) / (2 * a * b)) * 180 / Math.PI;
	}
	h(s,side){
		return 2 * s / side;	
	}
	m(a,b,c){
		return Math.sqrt ( ( (2 * Math.pow(b,2)) + (2 * Math.pow(c,2)) - Math.pow(a,2) ) / 4 );	
	}
	l(a,b,c){
		return Math.sqrt ( a * b * (a+b+c) * (a+b-c)  ) / (a+b);
	}
}
class option2{
	constructor(a, b, angle1){
		this.a = Math.abs(a);
		this.b = Math.abs(b);

		this.angle1 = (angle1);
		this.c = Math.sqrt (this.a * this.a + this.b * this.b - 2 *this.a * this.b * Math.cos (this.angle1 * Math.PI / 180));
		this.angle2 = this.angle(this.c,this.b,this.a);
		this.angle3 = this.angle(this.c,this.a,this.b);

		this.p = this.a + this.b + this.c;
		this.P = this.p/2;
		this.s = Math.sqrt (this.P * (this.P-this.a) * (this.P-this.b) * (this.P - this.c));
		this.r = this.s / this.P;
		this.R = this.a * this.b * this.c / (4 * this.s);
		
		this.h1 = this.h(this.s,this.a);
		this.h2 = this.h(this.s,this.b) ;		
		this.h3 = this.h(this.s,this.c);

		this.m1 = this.m(this.b,this.a,this.c);
		this.m2 = this.m(this.a,this.c,this.b);
		this.m3 = this.m(this.a,this.b,this.c);

		this.l1 = this.l(this.a, this.b, this.c);
		this.l2 = this.l(this.c, this.b, this.a);
		this.l3 = this.l(this.c, this.a, this.b);

		if ((this.a+this.b > this.c && this.a+this.c > this.b && this.b+this.c > this.a)) {
		return console.log("  samkutxedia ");
		}
		else 
		return console.log(" ar aris samkutxedi ");		
	}

	angle(a,b,c){
		return Math.acos((a * a+b * b-c * c) / (2 * a * b)) * 180 / Math.PI;
	}
	h(s,side){
		return 2 * s / side;
	}
	m(a,b,c){
		return Math.sqrt ( ( (2 * Math.pow(b,2)) + (2 * Math.pow(c,2)) - Math.pow(a,2) ) / 4 );
	}
	l(a,b,c){
		return Math.sqrt ( a * b * (a+b+c) * (a+b-c)  ) / (a+b);
	}
}
class option3{
	constructor(a, angle1, angle2){
		this.a = Math.abs(a);
		this.angle1 = angle1;
		this.angle2 = angle2;	
		this.angle3 = 180 - angle1 - angle2;
		this.b = (this.a * Math.sin(this.angle2 * Math.PI/180) / Math.sin(this.angle1 * Math.PI/180));
		this.c = (this.a * Math.sin(this.angle3 * Math.PI/180) / Math.sin(this.angle1 * Math.PI/180));

		this.p = this.a + this.b + this.c;
		this.P = this.p/2;
		this.s = Math.sqrt (this.P * (this.P-this.a) * (this.P-this.b) * (this.P - this.c));
		this.r = this.s / this.P;
		this.R = this.a * this.b * this.c / (4 * this.s);
		
		this.h1 = this.h(this.s,this.a);
		this.h2 = this.h(this.s,this.b) ;		
		this.h3 = this.h(this.s,this.c);

		this.m1 = this.m(this.b,this.a,this.c);
		this.m2 = this.m(this.a,this.c,this.b);
		this.m3 = this.m(this.a,this.b,this.c);

		this.l1 = this.l(this.a, this.b, this.c);
		this.l2 = this.l(this.c, this.b, this.a);
		this.l3 = this.l(this.c, this.a, this.b);

		if ((this.a+this.b > this.c && this.a+this.c > this.b && this.b+this.c > this.a)) {
		return console.log("  samkutxedia ");
		}
		else 
		return console.log(" ar aris samkutxedi ");
	}

	angle(a,angle1,angle2){
		return (a * Math.sin(angle2 * Math.PI/180) / Math.sin(angle1 * Math.PI/180));
	}
	h(s,side){
		return 2 * s / side;
	}
	m(a,b,c){
		return Math.sqrt ( ( (2 * Math.pow(b,2)) + (2 * Math.pow(c,2)) - Math.pow(a,2) ) / 4 );
	}
	l(a,b,c){
		return Math.sqrt ( a * b * (a+b+c) * (a+b-c)  ) / (a+b);
	}
}

class choose{
	constructor(a,b,c,option){
		this.a = a;
		this.b = b;
		this.c = c;
		let x;
		switch (option){
		case 1:
			x = new option1 (a,b,c);
			console.log('\n', "P:",x.p, '\n',"S:",x.s, '\n',"r:",x.r, '\n',"R:",x.R, '\n',"A:",x.angle1,'\n',"B:",x.angle2,'\n',"C:",x.angle3,'\n',"H1:",x.h1, '\n',"H2:",x.h2, '\n',"H3:",x.h3, '\n',"M1:",x.m1, '\n',"M2:",x.m2, '\n',"M3:",x.m3, '\n',"l1:",x.l1, '\n',"l2:",x.l2, '\n',"l3:",x.l3, '\n');
			break;
		case 2:
			x = new option2 (a,b,c);
			console.log('\n', "P:",x.p, '\n',"S:",x.s, '\n',"r:",x.r, '\n',"R:",x.R, '\n',"A:",x.angle1,'\n',"B:",x.angle2,'\n',"C:",x.angle3,'\n',"H1:",x.h1, '\n',"H2:",x.h2, '\n',"H3:",x.h3, '\n',"M1:",x.m1, '\n',"M2:",x.m2, '\n',"M3:",x.m3, '\n',"l1:",x.l1, '\n',"l2:",x.l2, '\n',"l3:",x.l3, '\n');
			break;
		case 3:	
			x = new option3 (a,b,c);
			console.log('\n', "P:",x.p, '\n',"S:",x.s, '\n',"r:",x.r, '\n',"R:",x.R, '\n',"A:",x.angle1,'\n',"B:",x.angle2,'\n',"C:",x.angle3,'\n',"H1:",x.h1, '\n',"H2:",x.h2, '\n',"H3:",x.h3, '\n',"M1:",x.m1, '\n',"M2:",x.m2, '\n',"M3:",x.m3, '\n',"l1:",x.l1, '\n',"l2:",x.l2, '\n',"l3:",x.l3, '\n');
			break;
		default:
			return console.log("really?");
		}
}
}

let k = new choose(3,4,5,1);