import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
   selector: "[PokemonBorderDesign]",
})
export class PokemonBorderDesignDirective implements OnInit {
   constructor(private el: ElementRef) {}

   @Input() types: string[];

   ngOnInit(): void {
      this.setBorderStyle();
   }

   private setBorderStyle() {
      if (this.types && this.types.length > 0) {
         const firstType = this.types[0];
         const borderClasses = `border-${firstType}`;
         this.el.nativeElement.classList.add(borderClasses);
         console.log(firstType);
      }
   }
}
