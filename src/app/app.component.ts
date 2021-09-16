import { Component } from '@angular/core';
import { CountryService } from './countryservice';
import { ProductService } from './productservice';
import { Product } from './product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { FilterService } from 'primeng/api';
import { PrimeNGConfig, SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CountryService, ProductService, FilterService]
})
export class AppComponent {

  date1: Date;

  date2: Date;

  date3: Date;

  date4: Date;

  date5: Date;

  date6: Date;

  date7: Date;

  date8: Date;

  date9: Date;

  date10: Date;

  date11: Date;

  date12: Date;

  date13: Date;

  date14: Date;
  
  dates: Date[];

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  es: any;

  invalidDates: Array<Date>

  blockSpace: RegExp = /[^\s]/;

  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

  cc: string;

  val1: string;

  val2: string;

  val3: string;

  val4: string;

  registerForm: FormGroup;

  submitted = false;

  checked: boolean = true;

  city: string = 'Chicago';

  username: string;

  password: string;

  checked1: boolean = false;

  checked2: boolean = true;

  tbchecked1: boolean = false;

  tbchecked2: boolean = true;

  selectedCountryAdvanced: any[];

  groupedCities: SelectItemGroup[];

  filteredGroups: any[];

  filteredCountries: any[];

  countries: any[];

  products: Product[];

  cities: City[];

  selectedCity: City;
  selectedCities: string[] = [];

  items: SelectItem[];

  slotChar: string = 'x';

  stateOptions: any[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = 'off';

  value2: number[] = [1, 2];

  value3: any;

  countriesbox: any[];

  selectedCountries: any[];

  sourceProducts: Product[];
    
  targetProducts: Product[];

  constructor(
    private countryService: CountryService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private filterService: FilterService,
    private primengConfig: PrimeNGConfig,
    private carService: ProductService
  ) {
    this.items = [];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.countriesbox = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' }
    ];

    this.paymentOptions = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 }
    ];

    this.justifyOptions = [
      { icon: 'pi pi-align-left', justify: 'Left', id: 'justify-left' },
      { icon: 'pi pi-align-right', justify: 'Right', id: 'justify-right' },
      { icon: 'pi pi-align-center', justify: 'Center', id: 'justify-center' },
      { icon: 'pi pi-align-justify', justify: 'Justify', id: 'justify-justify' }
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
    this.productService.getProductsSmall().then(data => (this.products = data));
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.value3 = this.justifyOptions[0];

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];

  this.carService.getProductsSmall().then(products => this.sourceProducts = products);
  this.targetProducts = [];
  
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
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

  filterGroupedCity(event) {
    let query = event.query;
    let filteredGroups = [];

    for (let optgroup of this.groupedCities) {
      let filteredSubOptions = this.filterService.filter(
        optgroup.items,
        ['label'],
        query,
        'contains'
      );
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredGroups.push({
          label: optgroup.label,
          value: optgroup.value,
          items: filteredSubOptions
        });
      }
    }

    this.filteredGroups = filteredGroups;
  }
}
