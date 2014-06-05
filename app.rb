require 'sinatra'
require 'pry'


 get '/' do
   erb :index
 end


post '/about' do
  @name = params['name']
  @age = params['age']
  @bio = params['bio']
  @language = params['language']
  @creditcard = params['creditcard']
  @check = params['check']
  @experience = params['experience']
  @pwd = params['pwd']
  @notes = params['notes']
  @referral = params['referral']

  erb :about
end
