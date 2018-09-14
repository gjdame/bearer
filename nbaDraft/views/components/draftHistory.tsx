import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'draft-history',
  shadow: true
})
export class DraftHistory {
  @Intent('draftHistory') fetcher: BearerFetch
  render() {
    return <bearer-scrollable
    	   fetcher={this.fetcher}
	   renderCollection={collection => (
	         <bearer-navigator-collection
		         data={collection}
			         renderFunc={name => name.field_draft_prospect}
				 	   />
  }
}

