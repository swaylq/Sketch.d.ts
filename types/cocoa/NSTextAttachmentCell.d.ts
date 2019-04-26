/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSCell, NSTextAttachmentCellProtocol {
    wantsToTrackMouseForEvent<R = boolean, P0 = unknown>(_wantsToTrackMouseForEvent: P0): R;
    setCellBaselineOffset<R = void, P0 = CGPoint>(_setCellBaselineOffset: P0): R;
    proxy<R = unknown>(): R;
    accessibilityIsURLAttributeSettable<R = boolean>(): R;
    accessibilityURLAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    attachment<R = NSTextAttachment>(): R;
    setAttachment<R = void, P0 = NSTextAttachment>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTextAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCell, NSTextAttachmentCellProtocol {
      alloc<R = NSTextAttachmentCell>(): R;
      new: <R = NSTextAttachmentCell>() => R;
    }
  }
}

declare const NSTextAttachmentCell: cocoa.NSTextAttachmentCell.CLASS;
