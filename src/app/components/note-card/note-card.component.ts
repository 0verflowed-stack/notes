import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {

  @Input() title!: string;
  @Input() body!: string;
  @Input({ transform: (num: number) => `${num}`}) link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>;

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit() {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    const viewableHeight = parseInt(style.getPropertyValue('height'));

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.truncator.nativeElement.style.display = 'block';
    } else {
      this.truncator.nativeElement.style.display = 'none';
    }
  }

  delete() {
    this.deleteEvent.emit();
  }

}
