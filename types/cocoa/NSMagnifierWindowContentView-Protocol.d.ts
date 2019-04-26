/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMagnifierWindowContentViewProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    setNextMode<R = void>(): R;
    color<R = NSColor>(): R;
    magnifyingGlassRadius<R = number>(): R;
    magnifyingGlassCenterPosition<R = CGPoint>(): R;
    magnifiedPointsPerPixel<R = number>(): R;
    contentImageRep<R = NSBitmapImageRep>(): R;
    setContentImageRep<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
  }
  namespace NSMagnifierWindowContentViewProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      magnifierViewSize<R = CGSize>(): R;
    }
  }
}
