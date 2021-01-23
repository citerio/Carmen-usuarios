import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';
import { ToastController,LoadingController,NavController, AlertController } from '@ionic/angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})

export class CheckoutPage implements OnInit {

  data:any;
  address:any;
  payment:any;
  payment_id : any;
  total_amount:any;
  paypal_id:any;
  Cuenta_clave:any;
  banco_name:any;
  text:any;
  stripe_id:any;
  stripeView = false;
  card_no:any;
  exp_month:any;
  exp_year:any;
  cvv:any;
  notes:any;
  delivery_type:any;
  admin:any;
  delivery_status: any;
  delivery_charges: any;
  otype:number = 1;
  comm_terminal: any;
  user_comm_terminal: boolean = false;
  porcent_cs: any;
  constructor(
    public server : ServerService,
    public toastController: ToastController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private nav: NavController,
    private payPal: PayPal,
    private stripe: Stripe,
    )
  {
    this.text = JSON.parse(localStorage.getItem('app_text'));
    this.address = localStorage.getItem('address_id');
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

  ngOnInit()
  {
  
  }

  ionViewWillEnter()
  {
    if(!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null')
    {
      this.nav.navigateRoot('/login');

      this.presentToast("Please login for continue.");
    }
    else
    {

      this.loadData();
    }
  }


  setType(id)
  {
    if (id == 2) {
      this.total_amount = Number(this.total_amount) - Number(this.delivery_charges);
      this.delivery_status = false;
    }else {
      if (this.delivery_status == false) {
        this.total_amount = Number(this.total_amount) + Number(this.delivery_charges);
      }
    }

    this.otype = id;
    this.payment = false;
    this.stripeView = false;
  }

  formVal()
  {
    if(this.otype == 1)
    {
      if(!this.address || !this.payment)
      {
        return false;
      }
      else
      {
        return true;
      }
    }
    else
    {
      if(!this.payment)
      {
        return false;
      }
      else
      {
        return true;
      }
    }
  }

  setPayment(id)
  {
    this.payment = id;
  
    if(id == 3)
    {
      this.stripeView = true;
      if (this.user_comm_terminal == true) {
        this.total_amount = Number(this.total_amount) - Number(this.porcent_cs);
        this.user_comm_terminal = false;
      }
    }
    else if(id == 4)
    {
      this.user_comm_terminal = true;
      this.UseStripe();
    }
    else
    {
      this.stripeView = false;
      if (this.user_comm_terminal == true) {
        this.total_amount = Number(this.total_amount) - Number(this.porcent_cs);
        this.user_comm_terminal = false;
      }
    }
  }

  async UseStripe()
  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: 'La comisión por pago con terminal es de <strong>'+this.comm_terminal+'%</strong>',
      buttons: [
       {
          text: 'Aceptar',
          handler: () => {
            if (this.user_comm_terminal == true) {
              this.porcent_cs = Number(this.total_amount) * Number(this.comm_terminal) / 100;
              this.total_amount = Number(this.total_amount) + Number(this.porcent_cs);
              this.presentToast("La comisión ha sido aplicada...");
            }
            
          }
        }
      ]
    });

    await alert.present();

  }

  async loadData()
  {
  	const loading = await this.loadingController.create({
      message: 'Espere porfavor...',
      mode: 'ios'
    });
    await loading.present();
    
    this.comm_terminal = this.admin.comm_terminal;
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    this.server.getCart(localStorage.getItem('cart_no')+"?lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
     
      var store_id = response.data.data[0].store_id;  
      this.server.getDeliveryType(store_id).subscribe(data => {
        this.delivery_type = data[0][0].service_del;
        if (this.delivery_type == 0) {
          this.otype = 2;
        }
      });
  
      // localStorage.getItem('user_id')
      this.server.getAddress(localStorage.getItem('user_id')+"?cart_no="+localStorage.getItem('cart_no')+"&store="+store_id+"&lid="+lid+"&lat="+lat+"&lng="+lng).subscribe((response:any) => {
        
      this.data         = response.data;
    
      if (response.data.address.length > 0) {
        // this.address      = response.data.address[0].id; // Marcamos la primer opcion que tenga
      }else {
        this.nav.navigateRoot('/address');
      }
      this.total_amount = (response.data.total);
      this.delivery_charges = response.data.Comercio.delivery_charges_value;
      if(response.data.Comercio.Cuenta_clave)
      {
        this.Cuenta_clave = response.data.Comercio.Cuenta_clave;
        this.banco_name   = response.data.Comercio.banco_name;
      }
      
      if(this.admin.paypal_client_id)
      {
          this.paypal_id    = this.admin.paypal_client_id;
      }

      if(this.admin.stripe_client_id)
      {
         this.stripe_id    = this.admin.stripe_client_id;
      }
   });

  	loading.dismiss();

  	});
  }

  makeOrder()
  {
    if(this.payment == 2)
    {
      this.payPaypal();
    }
    else if(this.payment == 3)
    {
      this.payWithStripe();
    }
    else if(this.payment == 4)
    {
      this.payWithTransfer();
    }
    else
    {
      this.order();
    }
  }

  async order()
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
      mode: 'ios'
    });
    await loading.present();
    
    var lat = localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
    var lng = localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;

    var allData = {
        user_id : localStorage.getItem('user_id'),
        payment : this.payment,
        address : this.address,
        cart_no : localStorage.getItem('cart_no'),
        payment_id : this.payment_id,
        user_comm_terminal: this.user_comm_terminal,
        otype : this.otype,
        notes:this.notes,
        lat: lat,
        lng: lng
      }

    
    this.server.order(allData).subscribe((response:any) => {
     
      if (response.data == 'Not_service') {
        loading.dismiss();
        this.presentToast('Sin servicio en la ubicación Seleccionada');
      }else {
        let LastStore = JSON.parse(localStorage.getItem('menu_item'));
        let dataLS =  [];
        if (localStorage.getItem('LastStore')) {
          dataLS = JSON.parse(localStorage.getItem('LastStore'));
          let has  = dataLS.find(id => id = LastStore.id);
          if (has.store_id != LastStore.id) {
            dataLS.push({
              store_id: LastStore.id
            });
          }
        }else {
          dataLS.push({
            store_id: LastStore.id
          });
        }

        localStorage.setItem('LastStore', JSON.stringify(dataLS));

        localStorage.setItem('order_data', JSON.stringify(response.data));
        // Agregamos a ultimas ordenes

        this.nav.navigateRoot('/done');

        loading.dismiss();
      }
    });
  }

  payPaypal()
  { 
      this.payPal.init({
      PayPalEnvironmentProduction: this.paypal_id,
      PayPalEnvironmentSandbox: this.paypal_id
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          let payment = new PayPalPayment(this.total_amount, 'MXN', 'Description', 'sale');
          this.payPal.renderSinglePaymentUI(payment).then((res) => {
            
            this.payment_id = res.response.id;

            if(this.payment_id)
            {
              this.order();
            }

          }, () => {
            
            this.presentToast("Paypal Transaction Cancelled");

          });
        }, () => {

          this.presentToast("Error in configuration");

        });
      }, () => {
        // 

          this.presentToast("Error in initialization, maybe PayPal isn't supported");

      });
  }

  payWithStripe()
  {
    if(this.card_no.length > 10 && this.exp_month && this.exp_year && this.cvv)
    {
      
        this.stripe.setPublishableKey(this.stripe_id);

        let card = {
         number: this.card_no,
         expMonth: this.exp_month,
         expYear: this.exp_year,
         cvc: this.cvv
        }
        this.stripe.createCardToken(card)
          .then(token => {
            this.makePayment(token.id);
          })
          .catch(error => {
          this.presentToast("Por favor ingrese detalles de pago válidos");

          });
    }
    else
    {
      this.presentToast("Por favor ingrese detalles de pago válidos");
    }
  }

  payWithTransfer() {
    this.presentToast("Una vez realizada la transferencia no te olvides de enviarle el ticket al comercio.");
    this.payment_id = 0;
    this.order();
  }

  async makePayment(token)
  {
    const loading = await this.loadingController.create({
      message: 'Enviando Informacion...',
      mode: 'ios'
    });
    await loading.present();

    this.server.makeStripePayment("?token="+token+"&amount="+this.total_amount).subscribe((response:any) => {

    if(response.data == "done")
    {
        this.payment_id = response.id;

        if(this.payment_id)
        {
          this.order();
        }
    }
    else
    {
      this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.");
    }

    loading.dismiss();

    });
  }

 

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'bottom'
    });
    toast.present();
  }

}
