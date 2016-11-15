import { platformBrowser }    from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);