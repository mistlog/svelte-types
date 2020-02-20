// TODO: add type test
const tag = <div></div>;

// label htmlFor
{
    const tag = <label for="name" />
}

// condition can be number
{
    const tag_boolean = (
        <if condition={true}>
        </if>
    );

    const tag_number = (
        <if condition={1}>
        </if>
    );
}

//
{
    const tag = <audio bindPaused={true}></audio>
}