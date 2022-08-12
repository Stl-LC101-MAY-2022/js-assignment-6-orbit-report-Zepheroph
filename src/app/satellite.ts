export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		let thing;
		if (this.type==="Space Debris"){
			console.log("came back as true")
			return thing=true;
   				}else{
					console.log("came back as false")
			return thing=false
   		}
	}
//    shouldShowWarning(): boolean {
// 	return this.type.toUpperCase() === "SPACE DEBRIS";
// }
}

// TODO 3a: fix isSpaceDebris check
