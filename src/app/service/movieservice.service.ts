import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  constructor(private http : HttpClient) { }

  inputArray:string[] = ["Genre",
  "Director",
  "Release Year",
  "State"
  ]
  filterTitle: string[] = [ 
    "Genre",
    "Director",
    "Release Year",
    "State"
  ]

  inputArrayEmitter = new BehaviorSubject<string[]>(this.inputArray)

  filterTitleEmitter = new BehaviorSubject<string[]>(this.filterTitle)

  emit(data:any){
    if(data.filter){
      this.filterTitleEmitter.next(data.filter)
    }
    else{
      this.inputArrayEmitter.next(data.name)
    }
  }

  getInput() : string[]{
    // console.log("service input",this.inputArray);
    
      return this.inputArray
  }

  getFilter(){
    // console.log("filter service",this.filterTitle);
    
    return this.filterTitle
  }


  getAllMovies():Observable<any>{
    return this.http.get('https://www.mockachino.com/43f2c1f2-709a-44/movie-details')
  }
  getFilterSelect():Observable<any>{
    
    const data = this.http.get('https://www.mockachino.com/43f2c1f2-709a-44/movie-details')
    // const data = this.http.get("http://localhost:3000/movies")
    return data;      
}
  // updateFilterSelection(selectedOption: string): void {
  //   const selectedOptionObj = this.filter.find(option => option.name === selectedOption);
    
  //   if (selectedOptionObj) {
  //     selectedOptionObj.check = !selectedOptionObj.check;
  //   }
  // }

}
