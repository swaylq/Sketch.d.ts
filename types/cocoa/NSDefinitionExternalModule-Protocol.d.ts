/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDefinitionExternalModuleProtocol<T = any> {
    showDefinitionByHotKey<R = void>(): R;
    showDefinitionForString_range_options_originProvider_inView<R = void, P0 = cocoa.NSAttributedString, P1 = cocoa._NSRange, P2 = cocoa.NSDictionary, P3 = void, P4 = cocoa.NSView>(_showDefinitionForString: P0, _range: P1, _options: P2, _originProvider: P3, _inView: P4): R;
    lookupAnimationControllerForString_range_options_originProvider_inView<R = cocoa.NSImmediateActionAnimationController, P0 = cocoa.NSAttributedString, P1 = cocoa._NSRange, P2 = cocoa.NSDictionary, P3 = void, P4 = cocoa.NSView>(_lookupAnimationControllerForString: P0, _range: P1, _options: P2, _originProvider: P3, _inView: P4): R;
  }
  namespace classes {
    export interface NSDefinitionExternalModuleProtocol<T = any> {  }
  }
}

declare const NSDefinitionExternalModuleProtocol: cocoa.classes.NSDefinitionExternalModuleProtocol;
