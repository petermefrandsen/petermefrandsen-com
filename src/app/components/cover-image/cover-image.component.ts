import { Component, ViewChild, ElementRef, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.scss']
})
export class CoverImageComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;
  isMobile = false;
  isHorizontalMobile = false;
  isTablet = false;

  private typewriter_text: string[] = [
    "<Platform Owner>",
    "<Architect>",
    "<Dev and Git Ops enthusaist>",
    "<Code Ninja>"
  ];
  private typewriter_index: number = 0;
  private typewriter_direction: boolean = true;
  public typewriter_display: string = "";

  constructor(private cdRef: ChangeDetectorRef) {
    if (window.innerWidth < 900) {
      this.isMobile = true;
      this.isHorizontalMobile = window.innerHeight < window.innerWidth ? true : false;
    } else if (window.innerWidth <= 1024) {
      this.isTablet = true;
    }
  }

  ngOnInit() {
    this.typingCallback(this);
  }

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      if (event.target.innerWidth < 900) {
        this.isMobile = true;
        this.isHorizontalMobile = window.innerHeight < window.innerWidth ? true : false;
        this.isTablet = false;
      } else if (event.target.innerWidth <= 1024) {
        this.isMobile = false;
        this.isTablet = true;
      } else {
        this.isMobile = false;
        this.isTablet = false;
      }
    }

  typingCallback(that: any) {
    let total_length = that.typewriter_text[that.typewriter_index].length;

    if (that.typewriter_display.length == total_length) {
      that.typewriter_direction = false;
    }

    if (!that.typewriter_direction && that.typewriter_display.length == 0) {
      that.typewriter_direction = true;
    }

    if (that.typewriter_direction && that.typewriter_display.length < total_length) {
      that.typewriter_display += that.typewriter_text[that.typewriter_index][that.typewriter_display.length];
    } else if (!that.typewriter_direction && that.typewriter_display.length > 0) {
      that.typewriter_display = that.typewriter_display.slice(0, -1);
    }

    if (that.typewriter_direction == false && that.typewriter_display.length == 0) {
      if (that.typewriter_index != (that.typewriter_text.length - 1)) {
        that.typewriter_index = that.typewriter_index + 1;
      } else {
        that.typewriter_index = 0;
      }
    }

    if (that.typewriter_display.length == total_length) {
      that.typewriter_direction = false;
      setTimeout(that.typingCallback, 800, that);
    } else if (!that.typewriter_direction && that.typewriter_display.length == 0) {
      that.typewriter_direction = true;
      setTimeout(that.typingCallback, 400, that);
    } else {
      setTimeout(that.typingCallback, 200, that);
    }
    that.cdRef.detectChanges();
  }
}
