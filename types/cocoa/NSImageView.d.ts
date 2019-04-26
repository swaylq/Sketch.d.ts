/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageView<T0 = void, T1 = void, T2 = void> extends NSControl, _NSAsynchronousPreparationDelegateProtocol, NSAccessibilityImageProtocol, NSMenuItemValidationProtocol {
    registerForDrags<R = void>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
    paste<R = void, P0 = unknown>(_paste: P0): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
    _copyImageToPasteboard<R = boolean>(): R;
    action<R = string>(): R;
    target<R = unknown>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    _setImageAndNotifyTarget<R = void, P0 = unknown>(__setImageAndNotifyTarget: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _imageByConvertingToSidebarImageIfNeeded<R = unknown, P0 = unknown>(__imageByConvertingToSidebarImageIfNeeded: P0): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _updateUsesSubview<R = void>(): R;
    _usesSubview<R = boolean>(): R;
    _updateImageSubview<R = void>(): R;
    _setImageSubview<R = void, P0 = unknown>(__setImageSubview: P0): R;
    _imageSubview<R = unknown>(): R;
    _setRejectsMultiFileDrops<R = void, P0 = boolean>(__setRejectsMultiFileDrops: P0): R;
    _rejectsMultiFileDrops<R = boolean>(): R;
    _usesCachedImage<R = boolean>(): R;
    set_usesCachedImage<R = void, P0 = boolean>(_v: P0): R;
    templateTintColor<R = NSColor>(): R;
    setTemplateTintColor<R = void, P0 = NSColor>(_v: P0): R;
    contentTintColor<R = NSColor>(): R;
    setContentTintColor<R = void, P0 = NSColor>(_v: P0): R;
    allowsCutCopyPaste<R = boolean>(): R;
    setAllowsCutCopyPaste<R = void, P0 = boolean>(_v: P0): R;
    animates<R = boolean>(): R;
    setAnimates<R = void, P0 = boolean>(_v: P0): R;
    placeholderImage<R = NSImage>(): R;
    setPlaceholderImage<R = void, P0 = NSImage>(_v: P0): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    imageAlignment<R = number>(): R;
    setImageAlignment<R = void, P0 = number>(_v: P0): R;
    imageFrameStyle<R = number>(): R;
    setImageFrameStyle<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, _NSAsynchronousPreparationDelegateProtocol, NSAccessibilityImageProtocol, NSMenuItemValidationProtocol {
      alloc<R = NSImageView>(): R;
      new: <R = NSImageView>() => R;
      imageWellWithImage_target_action<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_imageWellWithImage: P0, _target: P1, _action: P2): R;
      imageViewWithImage<R = unknown, P0 = unknown>(_imageViewWithImage: P0): R;
    }
  }
}

declare const NSImageView: cocoa.NSImageView.CLASS;
