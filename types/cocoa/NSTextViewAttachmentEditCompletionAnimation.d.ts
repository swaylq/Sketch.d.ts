/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewAttachmentEditCompletionAnimation<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimationDelegateProtocol {
    finishWithSuccess<R = void, P0 = boolean>(_finishWithSuccess: P0): R;
    startAnimation<R = void>(): R;
    dealloc<R = void>(): R;
    initWithImage_startRect_endRect<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGRect>(_initWithImage: P0, _startRect: P1, _endRect: P2): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTextViewAttachmentEditCompletionAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSAnimationDelegateProtocol {
      alloc<R = NSTextViewAttachmentEditCompletionAnimation>(): R;
      new: <R = NSTextViewAttachmentEditCompletionAnimation>() => R;
    }
  }
}

declare const NSTextViewAttachmentEditCompletionAnimation: cocoa.NSTextViewAttachmentEditCompletionAnimation.CLASS;
