# AngNgrx



### Problems:
```
--------------
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { BrowserModule } from '@angular/platform-browser';
--------------

  imports: [
    BrowserModule,
    // RouterModule,

--------------
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot([
      // routes
    ]),
--------------

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
```
