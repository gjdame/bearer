import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class DraftHistoryIntent {
  static intentName: string = 'draftHistory'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
   Client().get('/2018/draft_pick.json')
      .then(({ data }) => {
              callback({ data: data.map(({field_draft_prospect}) => ({field_draft_prospect})) })
	            })
		          .catch(error => {
			               callback({ error: error.toString() })
				       })
		}
	}

