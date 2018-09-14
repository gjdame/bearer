/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  render() {
    return (
      <div>
        <bearer-navigator btnProps={ { content:"NBA Draft", kind:"primary" } } direction="right">
          <bearer-navigator-screen navigationTitle="2018 Draft" name="nbaDraft">
            <draft-history />
          </bearer-navigator-screen>
        </bearer-navigator>
      </div>
    )
  }
}
