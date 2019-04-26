/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRolloveringImageTextAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell, NSServicesRolloverViewDelegateProtocol, NSSharingServiceDelegateProtocol, NSSharingServicePickerDelegateProtocol {
    sharingService_containerFrameOnScreenForShareItem<R = CGRect, P0 = unknown, P1 = unknown>(_sharingService: P0, _containerFrameOnScreenForShareItem: P1): R;
    sharingServicePicker_shouldShowForView<R = boolean, P0 = unknown, P1 = unknown>(_sharingServicePicker: P0, _shouldShowForView: P1): R;
    sharingServicePicker_sharingServicesForItems_mask_proposedSharingServices<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _mask: P2, _proposedSharingServices: P3): R;
    picker<R = unknown>(): R;
    itemsForSharingServices<R = unknown>(): R;
    triggerRelayoutOfTextView<R = void>(): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
    textView<R = NSTextView>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSRolloveringImageTextAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell, NSServicesRolloverViewDelegateProtocol, NSSharingServiceDelegateProtocol, NSSharingServicePickerDelegateProtocol {
      alloc<R = NSRolloveringImageTextAttachmentCell>(): R;
      new: <R = NSRolloveringImageTextAttachmentCell>() => R;
    }
  }
}

declare const NSRolloveringImageTextAttachmentCell: cocoa.NSRolloveringImageTextAttachmentCell.CLASS;
