import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../service/movieservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    
  fieldArray:string[]=[]
  filterArray:string[]=[]

  displayArray:string[]=[]
  inputValues: string[] = [];

  constructor(private dataService : MovieserviceService){}

  ngOnInit(){
    // console.log(this.dataService.inputArray,this.dataService.filterTitle);
    this.dataService.filterTitleEmitter.subscribe((res)=> this.displayArray=res) //changes
    this.dataService.inputArrayEmitter.subscribe((res)=> this.inputValues=res) //changes
    // this.displayArray=this.dataService.filterTitle

    // this.inputValues =this.dataService.inputArray

    this.dataService.getFilterSelect().subscribe(res=>{
        this.fieldArray = Object.keys(res.movies[0])
        this.filterArray = Object.keys(res.movies[0]).filter(x => !this.displayArray.includes(x)); 
        // console.log(this.displayArray);
        // console.log(this.fieldArray);
        // console.log(this.filterArray);

        
        
    }) 
  }

  onInputChange(){
    // this.dataService.inputArray = this.inputValues 
    this.dataService.emit({name:this.inputValues}) //changes
    // console.log(this.dataService.inputArray , this.dataService.filterTitle);
    console.log("filter",this.dataService.getFilter());
    console.log("name",this.dataService.getInput());
    
    
  }

  onOptionsChange(value : string,index : number){
    this.displayArray[index] = value
    // this.dataService.filterTitle =  this.displayArray 
    this.dataService.emit({filter:this.displayArray})
    this.filterArray = this.fieldArray.filter(x => !this.displayArray.includes(x));   
  }

  addFilter(){
      this.inputValues.push("")
      // this.dataService.inputArray =this.inputValues
      this.dataService.emit({name:this.inputValues}) //changes
      this.displayArray.push("id")
      // this.dataService.filterTitle =  this.displayArray 
      this.dataService.emit({filter:this.displayArray})  //changes
      this.filterArray = this.fieldArray.filter(x => !this.displayArray.includes(x));       
      // console.log(this.dataService.inputArray , this.dataService.filterTitle);
  }

  deleteFilter(index:number){
      this.inputValues.splice(index, 1);
      //this.dataService.emit({filter:this.inputValues})
      // this.dataService.inputArray =this.inputValues

      this.dataService.emit({name:this.inputValues})  //changes
      this.displayArray.splice(index, 1);
      // this.dataService.filterTitle =  this.displayArray  
      
      this.dataService.emit({filter:this.displayArray})  //changes
      this.filterArray = this.fieldArray.filter(x => !this.displayArray.includes(x));             
  }
}
