import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Grid, GridColumn, Header, TabPane } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import ProfileEdit from "./ProfileEdit";

export default observer(function ProfileAbout(){
    const { profileStore : {profile, isCurrentUser}} = useStore();
    const [editMode, setEditMode] = useState(false);
    return (
        <TabPane>
            <Grid>
                <GridColumn width={16}>
                    <Header floated="left" icon='user' 
                    content={`About ${profile?.displayName}`} />
                {isCurrentUser && (
                    <Button content={editMode ? 'Cancel' : 'Edit Profile'} 
                        floated="right" basic onClick={() => setEditMode(!editMode)}
                    />
                )}
                </GridColumn>
                <GridColumn width={16}>
                    {editMode? <ProfileEdit setEditMode={setEditMode} /> : <span style={{whiteSpace: 'pre-wrap'}}>{profile?.bio}</span>}
                </GridColumn>
            </Grid>
        </TabPane>
    )
})