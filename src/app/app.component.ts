import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { HeroComponent } from "./features/hero/hero.component";
import { StepsComponent } from "./features/steps/steps.component";
import { CatalogComponent } from "./features/catalog/catalog.component";
import { CtaComponent } from "./features/cta/cta.component";
import { ReviewsComponent } from "./features/reviews/reviews.component";
import { FaqComponent } from "./features/faq/faq.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, StepsComponent, CatalogComponent, CtaComponent, ReviewsComponent, FaqComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'USAProject';
}
