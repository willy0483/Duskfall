import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthPayload {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}
