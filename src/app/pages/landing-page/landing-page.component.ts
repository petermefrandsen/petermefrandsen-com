import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  chatBotHasBeenOpen = false;
  showChatBot = false;

  onCloseChatBot() {
    this.showChatBot = false;
  }

  onOpenChatBot() {
    if (!this.chatBotHasBeenOpen) {
      this.chatBotHasBeenOpen = true;
    }

    this.showChatBot = true;
  }
}
