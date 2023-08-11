import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faExclamationCircle,
  faExclamationTriangle,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() type: string;
  @Input() message: string;
  @Output() showPopup: EventEmitter<boolean>;
  iconTypes: Record<string, IconDefinition>;

  constructor() {
    this.message = '';
    this.type = 'primary';
    this.showPopup = new EventEmitter<boolean>();
    this.iconTypes = {
      success: faCheck,
      info: faQuestion,
      warning: faExclamationCircle,
      danger: faExclamationTriangle,
    };
  }

  handleClosed() {
    console.log('closing the toast');
    this.showPopup.emit(false);
  }

  ngOnInit(): void {}
}
