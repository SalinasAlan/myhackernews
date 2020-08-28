import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Link from './Link'

class LinkList extends Component {
    render() {

        const FEED_QUERY = gql`
            {
                feed {
                    links {
                        id
                        createdAt
                        url
                        description
                    }
                }
            }
        `

        return (
            <Query query={FEED_QUERY}>

                {({ loading, error, data }) => {
                    if (loading) return <div>Loading... :D</div>
                    if (error) return <div>Error</div>

                    const linksToRender = data.feed.links

                    return (
                        <div>
                            {linksToRender.map(link => <Link key={link.id} link={link} />)}
                        </div>
                    )
                }}

            </Query>
        )
    }
}

export default LinkList