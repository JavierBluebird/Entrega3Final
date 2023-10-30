import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagina-viaje',
  templateUrl: './pagina-viaje.page.html',
  styleUrls: ['./pagina-viaje.page.scss'],
})
export class PaginaViajePage implements OnInit {
  
  @ViewChild('map')mapRef: ElementRef | undefined;
  map!: GoogleMap;
  
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ionViewDidEnter()
  {
    this.createMap();
  }

  async createMap()
  {
    console.log('mapa creado')
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef?.nativeElement,
      forceCreate: true,
      config: {
          center: { //UBICACION ACTUAL EN EL MAPA DUOC ANTONIO VARAS
            lat: -33.43283572901143,
            lng: -70.61490440499237,
          },
          zoom: 16, // zoom total
    },
    })
  }

  destino = {
    direccion: "",
    valor: "",
    hora: ""
  }
  ngOnInit() {


    this.activeRoute.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if(state)
      {
        // Aca recibimos y reemplazamos las variables de este user por el recibido en modulo de datos desde user_register.
        this.destino.direccion = state['direccion_viaje'].direccion;
        this.destino.valor = state['direccion_viaje'].valor;
        this.destino.hora = state['direccion_viaje'].hora;
        
        console.log(this.destino); // para confirmar en consola.
      }
      
    })
  }

}

