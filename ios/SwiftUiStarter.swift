import SwiftUI

@available(iOS 14.0, *)
@objc(SwiftUIStarter)
class SwiftUIProxy: RCTViewManager {        
    override func view() -> UIView {
        let vc = UIHostingController(rootView: SwiftUIComponent())
        return vc.view
    }
}
