/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudAvatarView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    loadAvatar<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    loadView<R = void>(): R;
    imageView<R = NSImageView>(): R;
    setImageView<R = void, P0 = NSImageView>(_v: P0): R;
    avatar<R = SCKAvatar>(): R;
    setAvatar<R = void, P0 = SCKAvatar>(_v: P0): R;
  }
  namespace MSCloudAvatarView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSCloudAvatarView>(): R;
      new: <R = MSCloudAvatarView>() => R;
    }
  }
}

declare const MSCloudAvatarView: cocoa.MSCloudAvatarView.CLASS;
