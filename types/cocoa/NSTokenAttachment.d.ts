/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenAttachment<T0 = void, T1 = void, T2 = void> extends NSTextAttachment {
    _immediateActionAnimationControllerForRepresentedObject_inTextView<R = unknown, P0 = unknown, P1 = unknown>(__immediateActionAnimationControllerForRepresentedObject: P0, _inTextView: P1): R;
    _immediateActionAnimationControllerForCharacterAtIndex_inTextView<R = unknown, P0 = number, P1 = unknown>(__immediateActionAnimationControllerForCharacterAtIndex: P0, _inTextView: P1): R;
    _setNeedsSeparator<R = void, P0 = boolean>(__setNeedsSeparator: P0): R;
    _needsSeparator<R = boolean>(): R;
    setAttachmentCell<R = void, P0 = unknown>(_setAttachmentCell: P0): R;
    attachmentCell<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSTokenAttachment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachment {}
  }
}

declare const NSTokenAttachment: cocoa.NSTokenAttachment.CLASS;
