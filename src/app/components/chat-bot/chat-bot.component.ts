import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatBotComponent implements AfterViewInit {
  @ViewChild('scrollframe', {static: false}) scrollFrame!: ElementRef;
  @ViewChildren('messages') messageElements!: QueryList<any>;

  @Output() closeChatBot: EventEmitter<any> = new EventEmitter();

  messages: Array<ChatBotMessage> = new Array();
  showQuestions = false;
  private itemContainer: any;
  private scrollContainer: any;
  private isNearBottom = true;
  private messageDelay = 1500;
  private chatBotMessageClass = 'chat-bot__content__chat-bot-message--chat-bot';
  private userMessageClass = 'chat-bot__content__chat-bot-message--user';
  private messageLinkClass = 'chat-bot__content__chat-bot__link';

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.messageElements.changes.subscribe(() => this.onItemElementsChanged());

    Promise.resolve()
    .then(() => this.delay(500))
    .then(() => this.addMessageWithClass(
      '<div class="chat__icon chat__icon__robot"></div>' +
      '<div>Hi! I am Chatminator, ready to answer questions.</div>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Beep Beep Boop, Bzzz!', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Is there anything I can help you with?', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.onShowQuestions());
  }

  addMessagesForSite() {
    Promise.resolve()
    .then(() => this.onHideQuestions())
    .then(() => this.addMessageWithClass('Can you tell me more about your site?', this.userMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Sure thing!', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      '<div class="chat__icon chat__icon__angular"></div>' +
      '<div>The site is built using Angular ' +
      'and started with version 7 has continiously been updated to the newest version.</div>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      '<div>The site is built and deployed using GitHub actions and has previously been done using Azure Devops Pipelines.</div>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      '<div>Initually it was deployed to and hosted on Google Firebase, but now that is done on GitHub Pages.</div>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Is there anyhing else I can help you with?', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.onShowQuestions())
    .then(() => this.delay(0))
    .then(() => this.scrollToBottom());
  }

  addMessagesForOpenForPosition() {
    Promise.resolve()
    .then(() => this.onHideQuestions())
    .then(() => this.addMessageWithClass('Are you open for hire or any permanent positions?', this.userMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Currently Peter is employed on full-time.', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      'However, it is allways interesting knowing what positions and projects that are out there.',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      '<div class="chat__icon chat__icon__linkedin"></div>' +
      '<div>Feel free to contact Peter on ' +
      '<a style="color: white" href="https://www.linkedin.com/in/petermefrandsen/" target="blank">LinkedIn</a>.</div>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('In the meanwhile can I help you anything else?', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.onShowQuestions())
    .then(() => this.delay(0))
    .then(() => this.scrollToBottom());
  }

  addMessagesForDialog() {
    Promise.resolve()
    .then(() => this.onHideQuestions())
    .then(() => this.addMessageWithClass(
      'I just want to chat <div class="chat__icon chat__icon--inline chat__icon__smiley"></div>',
      this.userMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Oh! Well Peter is always up for a good conversation.', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      '<div class="chat__icon chat__icon__linkedin"></div>' +
      '<div>You can get in touch with him on ' +
      '<a style="color: white" href="https://www.linkedin.com/in/petermefrandsen/" target="blank">LinkedIn</a>.</div>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('In the meanwhile can I help you anything else?', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.onShowQuestions())
    .then(() => this.delay(0))
    .then(() => this.scrollToBottom());
  }

  addMessagesForCoverImage() {
    Promise.resolve()
    .then(() => this.onHideQuestions())
    .then(() => this.addMessageWithClass('Who has the credits for the picture?', this.userMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass(
      '<div class="chat__icon chat__icon__unsplash"></div>' +
      '<span>The credits for the photo goes to ' +
      '<a href="https://unsplash.com/@usukbayer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">' +
      'Usukhbayar Gankhuyag</a> on ' +
      '<a href="https://unsplash.com/@usukbayer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">' +
      'Unsplash</a></span>',
      this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.addMessageWithClass('Can I help you with anything else?', this.chatBotMessageClass))
    .then(() => this.delay(this.messageDelay))
    .then(() => this.onShowQuestions())
    .then(() => this.delay(0))
    .then(() => this.scrollToBottom());
  }

  onCloseChatBot() {
    this.closeChatBot.emit();
  }

  onHideQuestions() {
    this.showQuestions = false;
    this.cdr.detectChanges();
  }

  onShowQuestions() {
    this.showQuestions = true;
    this.cdr.markForCheck();
  }

  addMessageWithClass(message: string, className: string): void {
    this.messages.push({ className, message } as ChatBotMessage);
    this.cdr.markForCheck();
  }

  delay(duration: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), duration);
    });
  }

    scrolled(event: any): void {
      this.isNearBottom = this.isUserNearBottom();
    }

  private onItemElementsChanged(): void {
    if (this.isNearBottom) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  private isUserNearBottom(): boolean {
    const threshold = 50;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }
}

export class ChatBotMessage {
  className!: string;
  message!: string;
}
