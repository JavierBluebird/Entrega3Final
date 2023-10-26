import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModalpagPage } from '../modalpag/modalpag.page';

@Component({
  selector: 'app-pagina-viaje',
  templateUrl: './pagina-viaje.page.html',
  styleUrls: ['./pagina-viaje.page.scss'],
})
export class PaginaViajePage implements OnInit {
  
  @ViewChild('map')mapRef: ElementRef | undefined;
  map!: GoogleMap;
  
  constructor(private router: Router, private activeRoute: ActivatedRoute, private modalCtrl: ModalController) { }

  ionViewDidEnter()
  {
    this.createMap();
  }

// Función asíncrona para crear el mapa una vez entramos a la vista de la página.
  async createMap()
  {
    console.log('mapa creado')
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef?.nativeElement,
      forceCreate: true,
      config: {
        // COORDENADAS EN EL MAPA DUOC ANTONIO VARAS
          center: { 
            lng: -70.61490440499237, 
            lat: -33.43283572901143, 
          },
        // QUE TAN CERCA ESTÁ EL MAPA AL INICIALIZARSE
          zoom: 14, 
      },
    });
    this.addMarkers();
  }

  // Función asíncrona para añadir Markers. Consta de un array de coordenadas, título y snippet.
  async addMarkers(){
    const markers: Marker[] = [
      {
        // Las coordenadas son una estructura de 2 miembros: latitud y longitud
        coordinate: {
          lat: -70.61490440499237,
          lng: -33.43283572901143,
        },
        title: 'Primer Pin',
        snippet: 'mejor lugar en el planeta'
      },
      {
        coordinate: {
          lat: -70.6,
          lng: -27.2,
        },
        title: 'random lugar',
        snippet: 'no se'
      }
    ];
    
    const result = await this.map.addMarkers(markers);
    console.log(result)

    // Funcion listener para cuando hagamos click en un pin del map.
    this.map.setOnMarkerClickListener(async (marker) => {
      
      const modal = await this.modalCtrl.create({
        component: ModalpagPage,
        componentProps: {
          marker,
        },
        breakpoints: [0, 0.3],
        initialBreakpoint: 0.3,
      });
      modal.present();
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

