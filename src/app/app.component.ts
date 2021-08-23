import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-filter-app';


  data: any = {
    "results" : [
       {
          "address_components" : [
             {
                "long_name" : "1600",
                "short_name" : "1600",
                "types" : [ "street_number" ]
             },
             {
                "long_name" : "Amphitheatre Pkwy",
                "short_name" : "Amphitheatre Pkwy",
                "types" : [ "route" ]
             },
             {
                "long_name" : "Mountain View",
                "short_name" : "Mountain View",
                "types" : [ "locality", "political" ]
             },
             {
                "long_name" : "Santa Clara County",
                "short_name" : "Santa Clara County",
                "types" : [ "administrative_area_level_2", "political" ]
             },
             {
                "long_name" : "California",
                "short_name" : "CA",
                "types" : [ "administrative_area_level_1", "political" ]
             },
             {
                "long_name" : "United States",
                "short_name" : "US",
                "types" : [ "country", "political" ]
             },
             {
                "long_name" : "94043",
                "short_name" : "94043",
                "types" : [ "postal_code" ]
             }
          ],
          "formatted_address" : "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
          "geometry" : {
             "location" : {
                "lat" : 37.4224764,
                "lng" : -122.0842499
             },
             "location_type" : "ROOFTOP",
             "viewport" : {
                "northeast" : {
                   "lat" : 37.4238253802915,
                   "lng" : -122.0829009197085
                },
                "southwest" : {
                   "lat" : 37.4211274197085,
                   "lng" : -122.0855988802915
                }
             }
          },
          "place_id" : "ChIJ2eUgeAK6j4ARbn5u_wAGqWA",
          "plus_code": {
             "compound_code": "CWC8+W5 Mountain View, California, United States",
             "global_code": "849VCWC8+W5"
          },
          "types" : [ "street_address" ]
       }
    ],
    "status" : "OK"
 }

 addComp: any[] = this.data["results"][0]["address_components"];
 searchText: any;
 filters : any;

 async filterData(){
  console.log(this.filters);
  console.log(this.searchText);
  let resArr : any[] = [];  

  await this.addComp.filter(address => {
    if(this.filters == "types"){
      var typesArr : any[] = address[this.filters];
      typesArr.forEach(val => {
        if(val.toLowerCase() == this.searchText.toLowerCase()){
          resArr.push(address);
        }
      })
    }else{

      if(address[this.filters].toLowerCase() == this.searchText.toLowerCase()){
        resArr.push(address)
      }

    }
  });

  this.addComp = resArr ;
  console.log(this.data);
  

 }

 resetData(){
   this.addComp = this.data["results"][0]["address_components"];
 }

}
