# frozen_string_literal: true

# vue application controller
class VueApplicationController < ApplicationController
  def index; end

  def unauthrozied
    redirect_to '/sign_in'
  end
end
