require 'sinatra'
require 'shotgun'
require 'sinatra/activerecord'

set :database,  "sqlite3:donnees_db.sqlite3"

class Donnees < ActiveRecord::Base
end


get '/' do
  erb :index
end

get '/menu' do
  erb :menu
end

get '/lol' do
  erb :lol
end
