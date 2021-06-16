import { Component } from '@angular/core';
import { CountryService } from './countryservice';
import { ProductService } from './productservice';
import { Product } from './product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountryService, ProductService]
})
export class AppComponent {

    registerForm: FormGroup;
    submitted = false;


  checked: boolean = true;

  city: string;

  username: string;
  password: string;

  checked1: boolean = false;
  checked2: boolean = true;

  selectedCountryAdvanced: any[];
  filteredCountries: any[];
  countries: any[];
  products: Product[];

  cities: City[];
  selectedCity: City;

  constructor(
    private countryService: CountryService,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
    this.productService.getProductsSmall().then(data => (this.products = data));
     this.registerForm = this.formBuilder.group({
            firstName: ['',  [Validators.required, Validators.minLength(6)]],
            lastName: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

   // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }

  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
