/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		ApplyForm:{
			data:"ApplyFormInput"
		}
	},
	Query:{
		findProduct:{

		}
	},
	ApplyFormInput:{

	}
}

export const ReturnTypes: Record<string,any> = {
	Mutation:{
		ApplyForm:"Boolean"
	},
	Query:{
		findProduct:"Product",
		me:"String"
	},
	Product:{
		description:"String",
		id:"String",
		image:"String",
		name:"String",
		price:"Int",
		quantity:"Int"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}