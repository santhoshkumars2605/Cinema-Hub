import { Component ,OnInit,ViewChild} from '@angular/core';
import {MovieserviceService} from '../service/movieservice.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


interface MovieItems {
  // ... other properties
  [key: string]: any;
}
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss'],
  // providers:[MovieserviceService]
})

export class MovielistComponent implements OnInit{

  totalboxoffice : number =0

  apiResponse:any = [];

  constructor(private dataService:MovieserviceService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns:string[] = ['id','Movie Title','Genre','Release Year','Director','Rating','State','District','Taluk','Box Office Collections (in Crores)']
  
  dataSource!:MatTableDataSource<MovieItems>;
  list!: any[]
  
  inputArray !: string[] ;
  filterArray !: string[] ;

  ngOnInit(){

    this.dataService.inputArrayEmitter.subscribe((res)=> this.inputArray = res) //changes
    this.dataService.filterTitleEmitter.subscribe((res)=> this.filterArray=res) //changes

    this.getAllMovies()
    // this.filterArray = this.dataService.getFilter()
    // this.inputArray  = this.dataService.getInput()
    console.log(this.filterArray);
    console.log(this.inputArray);      
  } 
  getAllMovies(){
    let moviesdata;
    this.dataService.getAllMovies().subscribe({
    next:(res)=>{
      moviesdata = res.movies
      this.apiResponse = res.movies;
      this.dataSource = new MatTableDataSource<MovieItems>(res.movies)
      this.dataSource.paginator = this.paginator;

      moviesdata.map((data : any)=>{       
        this.totalboxoffice+=data['Box Office Collections (in Crores)']
    })
    },
    error:(error)=>{
      console.log(error)
    } 
    });
  }
  
    getDropdown(value: string): string[] {
      
      const set = new Set<string>();
      if (this.dataSource) {
        this.dataSource['filteredData'].filter((item)=>{
          set.add(item[value])
        })
      }

      //console.log(set);

      const options = [...set]; // Convert Set to array
      return options;
    }




    applyFilter(value : string | number, label:string) {
      console.log(value,label);
      
      if(typeof value == "string"){
        if(this.apiResponse){
          let filterdata = this.apiResponse.filter((item:any)=>{
            // console.log('item',item[label],value.toLowerCase());
          return item[label].toLowerCase() === value.toLowerCase()
          
        })
        this.dataSource= new MatTableDataSource(filterdata)
        this.apiResponse=[...filterdata]
      }
        // this.dataSource.filter = (filterValue as string).trim().toLowerCase(); 
      }
      if(typeof value == "number"){
        if(this.apiResponse){
          let filterValue = this.apiResponse.filter((item:any)=>{
            // console.log('simple',label);
            
            return item[label]===value
          })
          console.log(filterValue);
          this.apiResponse=[...filterValue]
          this.dataSource = new MatTableDataSource(filterValue)
        }
        
        
        // this.dataSource.filter  = filterValue.toString()
        
      }
      
      
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
      // box office update
      this.totalboxoffice = 0
      if(this.dataSource){
        this.dataSource.filteredData.map((data : any)=>{   
          this.totalboxoffice+=data['Box Office Collections (in Crores)']
        })
      }
    }
}
