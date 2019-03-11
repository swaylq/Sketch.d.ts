/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputServerMouseTrackerProtocol<T = any> {
    mouseUpOnCharacterIndex_atCoordinate_withModifier_client<R = void, P0 = number, P1 = cocoa.CGPoint, P2 = number, P3 = unknown>(_mouseUpOnCharacterIndex: P0, _atCoordinate: P1, _withModifier: P2, _client: P3): R;
    mouseDraggedOnCharacterIndex_atCoordinate_withModifier_client<R = boolean, P0 = number, P1 = cocoa.CGPoint, P2 = number, P3 = unknown>(_mouseDraggedOnCharacterIndex: P0, _atCoordinate: P1, _withModifier: P2, _client: P3): R;
    mouseDownOnCharacterIndex_atCoordinate_withModifier_client<R = boolean, P0 = number, P1 = cocoa.CGPoint, P2 = number, P3 = unknown>(_mouseDownOnCharacterIndex: P0, _atCoordinate: P1, _withModifier: P2, _client: P3): R;
  }
  namespace classes {
    export interface NSInputServerMouseTrackerProtocol<T = any> {  }
  }
}

declare const NSInputServerMouseTrackerProtocol: cocoa.classes.NSInputServerMouseTrackerProtocol;
