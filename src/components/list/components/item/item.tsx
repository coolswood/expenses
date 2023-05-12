import { Component, Prop, h, Event, EventEmitter, Listen } from '@stencil/core';
import { formatData } from '../../../../utils';

@Component({
  tag: 'app-item',
  styleUrl: 'item.scss',
  shadow: true
})
export class Item {
  @Prop() id: string;
  @Prop() description: string;
  @Prop() date: string;
  @Prop() amount: string;

  @Event({
    eventName: 'itemEdit',
}) itemEdit: EventEmitter;

onEditHandler() {
    this.itemEdit.emit({
        id: this.id,
        description: this.description,
        amount: this.amount,
        date: this.date
    });
}

  @Event({
    eventName: 'itemDelete',
  }) itemDelete: EventEmitter;

  onDeleteHandler() {
    this.itemDelete.emit({
        id: this.id,
    });
  }

  @Listen('buttonClicked')
  onButtonClicked(event: CustomEvent<{
    buttonType: string;
  }>) {
    const buttonType = event.detail.buttonType;

    switch (buttonType) {
      case 'edit':
        this.onEditHandler();
        break;
      case 'delete':
        this.onDeleteHandler();
        break;
    }
    
  }

  render() {
    return (
      <div class='item'>

        <div>
          <h3>Date</h3>
          <p>{formatData(this.date)}</p>
        </div>

        <div>
          <h3>Description</h3>
          <p>{this.description}</p>
        </div>
        
        <div>
          <h3>Amount</h3>
          <p>{this.amount}</p>
        </div>

        <div>
          <ui-button buttonType='edit' text='Edit' />
          <ui-button buttonType='delete' text='Delete' />
        </div>
      </div>
    );
  }
}
